const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const titleCount = document.getElementById("title-count");
const contentCount = document.getElementById("content-count");
const errorMsg = document.getElementById("error-msg");
const notesList = document.getElementById("notes-list");
const noteCount = document.getElementById("note-count");

titleInput.addEventListener("input", () => {
  titleCount.textContent = `${titleInput.value.length}/100`;
});

contentInput.addEventListener("input", () => {
  contentCount.textContent = `${contentInput.value.length}/500`;
});

function showError(msg) {
  errorMsg.textContent = msg;
  setTimeout(() => { errorMsg.textContent = ""; }, 3000);
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function renderNotes(notes) {
  if (!notes.length) {
    notesList.innerHTML = `<div class="empty-state">No notes yet. Add one above!</div>`;
    noteCount.textContent = "0 notes";
    return;
  }
  noteCount.textContent = `${notes.length} note${notes.length > 1 ? "s" : ""}`;
  notesList.innerHTML = notes.map(n => `
    <div class="note-card" id="note-${n.id}">
      <div class="note-body">
        <div class="note-title">${escapeHtml(n.title)}</div>
        <div class="note-content">${escapeHtml(n.content)}</div>
        <div class="note-time">${formatDate(n.created_at)}</div>
      </div>
      <button class="delete-btn" onclick="deleteNote(${n.id})">Delete</button>
    </div>
  `).join("");
}

function escapeHtml(str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

async function loadNotes() {
  try {
    const res = await fetch("/api/notes");
    const notes = await res.json();
    renderNotes(notes);
  } catch {
    notesList.innerHTML = `<div class="empty-state">Could not load notes. Is the server running?</div>`;
  }
}

async function addNote() {
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  if (!title) return showError("Title is required.");
  if (!content) return showError("Content is required.");

  const btn = document.getElementById("add-btn");
  btn.textContent = "Adding...";
  btn.disabled = true;

  try {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content })
    });
    if (!res.ok) {
      const err = await res.json();
      showError(err.error || "Failed to add note.");
    } else {
      titleInput.value = "";
      contentInput.value = "";
      titleCount.textContent = "0/100";
      contentCount.textContent = "0/500";
      await loadNotes();
    }
  } catch {
    showError("Network error. Check if the server is running.");
  } finally {
    btn.textContent = "Add Note";
    btn.disabled = false;
  }
}

async function deleteNote(id) {
  const card = document.getElementById(`note-${id}`);
  if (card) card.style.opacity = "0.4";
  try {
    await fetch(`/api/notes/${id}`, { method: "DELETE" });
    await loadNotes();
  } catch {
    if (card) card.style.opacity = "1";
    showError("Could not delete note.");
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.ctrlKey) addNote();
});

loadNotes();

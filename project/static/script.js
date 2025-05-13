// Add new task
document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('task-input');
    const content = input.value.trim();
    
    if (content) {
        try {
            const response = await fetch('/add_task', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content })
            });
            
            const newTask = await response.json();
            
            const taskElement = document.createElement('div');
            taskElement.className = 'task';
            taskElement.dataset.id = newTask.id;
            taskElement.innerHTML = `
                <span>${newTask.content}</span>
                <div class="actions">
                    <button class="toggle-btn">Done</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;
            
            document.getElementById('task-list').appendChild(taskElement);
            input.value = '';
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }
});

// Handle task actions (delete/toggle)
document.getElementById('task-list').addEventListener('click', async (e) => {
    const taskElement = e.target.closest('.task');
    if (!taskElement) return;
    
    const taskId = taskElement.dataset.id;
    
    // Delete task
    if (e.target.classList.contains('delete-btn')) {
        try {
            await fetch(`/delete_task/${taskId}`, { method: 'DELETE' });
            taskElement.remove();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }
    
    // Toggle task status
    if (e.target.classList.contains('toggle-btn')) {
        try {
            const response = await fetch(`/toggle_task/${taskId}`, { method: 'PATCH' });
            const { done } = await response.json();
            
            taskElement.classList.toggle('done', done);
            e.target.textContent = done ? 'Undo' : 'Done';
        } catch (error) {
            console.error('Error toggling task:', error);
        }
    }
});



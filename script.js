// Lógica para agregar tareas
const addTaskBtn = document.getElementById('addTaskBtn');
const taskContainer = document.getElementById('taskContainer');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

addTaskBtn.addEventListener('click', function () {
    const taskTitle = document.getElementById('taskTitle').value;
    if (taskTitle) {
        const newTask = { title: taskTitle };
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        document.getElementById('taskTitle').value = '';
    }
});

function renderTasks() {
    taskContainer.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task.title}</span> <button onclick="deleteTask(${index})">Eliminar</button>`;
        taskContainer.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

renderTasks();

// Lógica para agregar pagos a proveedores
const addPaymentBtn = document.getElementById('addPaymentBtn');
const paymentContainer = document.getElementById('paymentContainer');

let payments = JSON.parse(localStorage.getItem('payments')) || [];

addPaymentBtn.addEventListener('click', function () {
    const paymentProvider = document.getElementById('paymentProvider').value;
    const paymentDate = document.getElementById('paymentDate').value;
    
    if (paymentProvider && paymentDate) {
        const newPayment = { provider: paymentProvider, date: paymentDate };
        payments.push(newPayment);
        localStorage.setItem('payments', JSON.stringify(payments));
        renderPayments();
        document.getElementById('paymentProvider').value = '';
        document.getElementById('paymentDate').value = '';
    }
});

function renderPayments() {
    paymentContainer.innerHTML = '';
    payments.forEach((payment, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>Proveedor: ${payment.provider}</span> - Fecha de Pago: ${payment.date} <button onclick="deletePayment(${index})">Eliminar</button>`;
        paymentContainer.appendChild(li);
    });
}

function deletePayment(index) {
    payments.splice(index, 1);
    localStorage.setItem('payments', JSON.stringify(payments));
    renderPayments();
}

renderPayments();

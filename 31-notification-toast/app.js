const btns = document.querySelectorAll('.btn');
const notifications = document.querySelector('.notifications');

const toastDetails = {
  timer: 5000,
  success: {
    icon: 'fa-circle-check',
    text: 'Success Toast',
  },
  error: {
    icon: 'fa-circle-xmark',
    text: 'Error Toast',
  },
  warning: {
    icon: 'fa-triangle-exclamation',
    text: 'Warning Toast',
  },
  info: {
    icon: 'fa-circle-info',
    text: 'Info Toast',
  },
};

function removeToast(toast) {
  toast.classList.add('hide');
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(function () {
    toast.remove();
  }, 5000);
}

function createToast(id) {
  const { icon, text } = toastDetails[id];
  const toast = document.createElement('li');
  toast.className = `toast ${id}`;
  toast.innerHTML = ` <div class="column">
    <i class="fa-solid ${icon}"></i>
    <span>${text}</span>
</div>`;
  notifications.appendChild(toast);
  toast.timeoutId = setTimeout(function () {
    removeToast(toast);
  }, toastDetails.timer);
}

btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    createToast(btn.id);
  });
});

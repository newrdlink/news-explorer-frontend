export const inputs = [
  {
    id: 10,
    name: "email",
    type: "email",
    required: true,
    placeholder: "Введите email",
    label: "Email",
    autocomplete: "off",
    error: "Не правильный формат email"
  },
  {
    id: 11,
    type: "password",
    name: "password",
    placeholder: "Введите пароль",
    required: true,
    label: "Пароль",
    minlength: 6,
    maxlength: 20,
    error: "Не правильный формат пароля"
  },
  {
    id: 12,
    name: "name",
    placeholder: "Введите своё имя",
    required: true,
    label: "Имя",
    minlength: 2,
    maxlength: 30,
    error: "Не правильный формат имя"
  }
]

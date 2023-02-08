const titleAsk = `
        <div>
          <h2 class="popup__title popup__title-ask">
            Получите ответы на все <br />
            интересующие вопросы
          </h2>
          <span class="popup__subtitle popup__subtitle-ask">
            от нашего сотрудника и скачайте материалы по франшизе <br />ASIASALE
            на почту
          </span>
        </div>
`;
const titlePossibility = `
        <div>
          <h2 class="popup__title popup__title-possibility">
            Не упустите возможность
          </h2>
          <span class="popup__subtitle">
            стать партнёром компании ASIASALE федерального уровня. Оставьте
            заявку на личную онлайн-консультацию от нашего менеджера
          </span>
        </div>
`;
const titleConsultation = `
        <div>
          <h2 class="popup__title popup__title-consultation">
            Получите бесплатную
            <br />30-минутную консультацию
          </h2>
          <span class="popup__subtitle">
            нашего сотрудника по франшизе ASIASALE. Дополнительные материалы
            скачайте на электронную почту
          </span>
        </div>
`;

export const popupValue = {
  Consultation: {
    title: titleConsultation,
    image: "image-popup__consultation",
    button: "Заказать онлайн-консультацию",
    sectionNameText:
      "Получите бесплатную 30-минутную консультацию нашего сотрудника по франшизе ASIASALE. Дополнительные материалы скачайте на электронную почту",
    valueInput: "Закрытая",
  },
  Possibility: {
    title: titlePossibility,
    image: "image-popup__possibility",
    button: "Получить консультацию менеджера",
    sectionNameText:
      "Не упустите возможность стать партнёром компании ASIASALE федерального уровня. Оставьте заявку на личную онлайн-консультацию от нашего менеджера",
    valueInput: "Закрытая",
  },
  Ask: {
    title: titleAsk,
    image: "image-popup__ask",
    button: "Задать вопросы",
    sectionNameText:
      "Получите ответы на все интересующие вопросы от нашего сотрудника и скачайте материалы по франшизе ASIASALE на почту",
    valueInput: "Закрытая",
  },
};

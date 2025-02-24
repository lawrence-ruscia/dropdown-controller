export default class DropdownController {
  constructor({ dropdownBtn, dropdownMenu, arrowIcon }) {
    this.dropdownBtn = document.querySelector(dropdownBtn);
    this.dropdownMenu = document.querySelector(dropdownMenu);
    this.arrowIcon = document.querySelector(arrowIcon);

    if (!this.dropdownBtn || !this.dropdownMenu || !this.arrowIcon) {
      throw new Error('DropdownController: Invalid selectors provided.');
    }

    this.#init();
  }

  #init() {
    const rootElement = document.documentElement;

    // Toggle when button is clicked
    this.dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    // Close when clicked outside of dropdown
    rootElement.addEventListener('click', (e) => {
      const { target } = e;
      if (
        !this.dropdownMenu.contains(target) &&
        !this.dropdownBtn.contains(target)
      ) {
        this.close();
      }
    });
  }

  toggle() {
    const isOpen = this.dropdownMenu.classList.contains(
      'dropdown-menu--active'
    );

    if (isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.dropdownMenu.classList.add('dropdown-menu--active');
    this.arrowIcon.classList.add('arrow--active');
  }

  close() {
    this.dropdownMenu.classList.remove('dropdown-menu--active');
    this.arrowIcon.classList.remove('arrow--active');
  }
}

const dropdown = new DropdownController({
  dropdownBtn: '.dropdown-btn',
  dropdownMenu: '.dropdown-menu',
  arrowIcon: '.arrow',
});

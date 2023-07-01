import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: HTMLElement[] = [];
  sectionPositions: number[] = [];

  constructor() { }

  ngOnInit(): void {
    const toggleBtnIcon = document.querySelector('.toggle-btn i');
    const toggleBtn = document.querySelector('.toggle-btn');
    const dropDownMenu = document.querySelector('.dropdown-menu');
    const menuItems = document.querySelectorAll('.links li');

        // Obtener los elementos de navegación
        this.menuItems = Array.from(document.querySelectorAll('.links li'));

        // Obtener las posiciones de las secciones
        this.sectionPositions = this.getSectionPositions();

    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        menuItems.forEach(item => {
          item.querySelector('a')?.removeAttribute('id');
        });
        item.querySelector('a')?.setAttribute('id', 'selected');
      });
    });
    if (toggleBtn != null && dropDownMenu != null) {
      toggleBtn.addEventListener('click', function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
        if (toggleBtnIcon != null) {
          if (isOpen) {
            toggleBtnIcon.classList.remove('uil-bars');
            toggleBtnIcon.classList.add('uil-x');
          } else {
            toggleBtnIcon.classList.remove('uil-x');
            toggleBtnIcon.classList.add('uil-bars');
          }
        }
      });

    }
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    // Resaltar el elemento de navegación activo al desplazarse por la página
    this.highlightNavigation();
  }

  getSectionPositions(): number[] {
    const sections = Array.from(document.querySelectorAll('section'));
    return sections.map(section => section.offsetTop);
  }

  highlightNavigation() {
    const scrollPosition = window.pageYOffset + 100;

    // Encontrar la sección activa en función de la posición de desplazamiento
    const activeSectionIndex = this.sectionPositions.findIndex(position => position > scrollPosition) - 1;

    // Eliminar la clase 'selected' de todos los elementos de navegación
    this.menuItems.forEach(item => {
      item.querySelector('a')?.removeAttribute('id');
    });

    // Obtener el elemento de navegación para la sección activa
    let activeMenuItem: Element | null = this.menuItems[activeSectionIndex];

    // Verificar si la sección activa está en el submenú de "Sobre mí"
    if (activeMenuItem && activeMenuItem.querySelector('ul')) {
      const submenuItems = Array.from(activeMenuItem.querySelectorAll('ul li'));

      // Encontrar la sección activa en el submenú
      const activeSubmenuItemIndex = submenuItems.findIndex(item => {
        const link = item.querySelector('a');
        return link?.getAttribute('href') === window.location.hash;
      });

      // Obtener el elemento de navegación del submenú activo
      activeMenuItem = submenuItems[activeSubmenuItemIndex];
    }

    // Aplicar la clase 'selected' al elemento de navegación activo
    if (activeMenuItem) {
      activeMenuItem.querySelector('a')?.setAttribute('id', 'selected');
    }
  }
}
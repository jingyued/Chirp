import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = 'lara-light-indigo'; // Default theme

  constructor(@Inject(DOCUMENT) private document: Document) {
    // Retrieve the theme from localStorage if it exists
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      this.setTheme(storedTheme);
    }
  }

  setTheme(theme: string) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = theme + '.css';
      this.currentTheme = theme;
      // Store the selected theme in localStorage
      localStorage.setItem('theme', theme);
    }
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }
}

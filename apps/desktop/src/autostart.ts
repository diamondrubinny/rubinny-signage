// Rubinny — free and open-source digital signage. Powered by Rubinny · Open source.
// Copyright (C) 2026 The Rubinny Authors. Created by Diamond Rubinny.
// SPDX-License-Identifier: AGPL-3.0-only
// https://github.com/diamondrubinny/freescreensign · The attribution must be kept (LICENSING.md).

/**
 * How the player starts when the user signs in:
 * - `xdg`: an autostart entry (Linux desktops);
 * - `login-item`: Electron's login item (the Windows installer);
 * - `package`: the startup task in the Microsoft Store package's manifest
 *   (build/appx-extensions.xml). A login item would point at the package's versioned folder,
 *   which changes with each update, so the app registers nothing itself.
 */
export type AutostartMethod = 'xdg' | 'login-item' | 'package';

export function autostartMethod(platform: NodeJS.Platform, windowsStore: boolean): AutostartMethod {
  if (platform === 'linux') return 'xdg';
  if (platform === 'win32' && windowsStore) return 'package';
  return 'login-item';
}

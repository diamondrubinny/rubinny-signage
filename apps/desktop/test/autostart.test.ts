// Rubinny — free and open-source digital signage. Powered by Rubinny · Open source.
// Copyright (C) 2026 The Rubinny Authors. Created by Diamond Rubinny.
// SPDX-License-Identifier: AGPL-3.0-only
// https://github.com/diamondrubinny/freescreensign · The attribution must be kept (LICENSING.md).

import { describe, expect, it } from 'vitest';
import { autostartMethod } from '../src/autostart.js';

describe('autostartMethod', () => {
  it('uses the package startup task in the Microsoft Store build', () => {
    expect(autostartMethod('win32', true)).toBe('package');
  });

  it('uses a login item for the Windows installer and an autostart entry on Linux', () => {
    expect(autostartMethod('win32', false)).toBe('login-item');
    expect(autostartMethod('linux', false)).toBe('xdg');
  });
});

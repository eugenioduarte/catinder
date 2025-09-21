import { border, Colors, spacings, typography } from '../constants/theme'
import { Theme } from './theme.type'

describe('Theme Type', () => {
  it('should conform to the Theme type using the constants', () => {
    const theme: Theme = {
      colors: Colors.light,
      spacings,
      border,
      typography,
    }

    expect(theme.colors).toEqual(Colors.light)
    expect(theme.spacings).toEqual(spacings)
    expect(theme.border).toEqual(border)
    expect(theme.typography).toEqual(typography)
  })
})

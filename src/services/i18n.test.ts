import i18n from './i18n'

describe('i18n configuration', () => {
  it("should initialize with language 'en'", () => {
    expect(i18n.language).toBe('en')
  })

  it("should have the fallback language set to 'en'", () => {
    const fallback = i18n.options?.fallbackLng

    if (Array.isArray(fallback)) {
      expect(fallback).toContain('en')
    } else {
      expect(fallback).toBe('en')
    }
  })

  it('should include English translations', () => {
    const resources = i18n.options?.resources
    expect(resources).toHaveProperty('en')
    expect(resources?.en).toHaveProperty('translation')
    expect(resources?.en?.translation).toMatchObject(expect.any(Object))
  })
})

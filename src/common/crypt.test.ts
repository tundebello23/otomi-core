import * as crypt from './crypt'

describe('Crypt', () => {
  it('Should provied correct list of files to be encrypted', () => {
    const allFileNames = [
      'secrets.a.yaml',
      'secrets.a.yaml.dec',
      'secrets.b.yaml.dec',
      'secrets.c.yaml',
      'a.yaml',
      'b.yaml',
      'd.yaml',
    ]
    const r = crypt.getAllSecretFiles(allFileNames, true, '.dec')
    expect(r.sort()).toEqual(['secrets.a.yaml.dec', 'secrets.b.yaml.dec', 'secrets.c.yaml'].sort())
  })
  it('should be flattened', () => {
    const allFileNames = [
      'secrets.a.yaml',
      'secrets.a.yaml.dec',
      'secrets.b.yaml.dec',
      'secrets.c.yaml',
      'a.yaml',
      'b.yaml',
      'd.yaml',
    ]
    const r = crypt.getAllSecretFiles(allFileNames, false, '.dec')
    expect(r.sort()).toEqual(['secrets.a.yaml', 'secrets.c.yaml'].sort())
  })
})

![CI](https://github.com/JohanM27/tarea-ci-cd/actions/workflows/ci.yml/badge.svg)

## Descripción
Proyecto Node.js con integración continua, pruebas unitarias y linting.

## Instalación

```bash
npm install
```

## Pruebas

```bash
npm test
```

## Linting

```bash
npx eslint src/ --ext .js
```

## Ejecución local

No requiere build, solo ejecuta las funciones desde los archivos en src/.

---

- El pipeline de CI ejecuta lint, test y build en cada push y pull request a main.
- Las pruebas se ejecutan en Node.js 18 y 20.
- El job de test genera reporte de cobertura.
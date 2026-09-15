/**
 * ============================================================================
 * 🥊 RETO 01: Tipos Primitivos, Inferencia y Arrays en TypeScript
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 * 
 * 📖 CONTEXTO / MISIÓN:
 * El sistema web anterior de la UETS sumaba calificaciones en JavaScript vanilla
 * sin tipos ("10" + "8" = "108"), produciendo errores graves en los promedios.
 * Tu misión es declarar tus variables personales con tipos explícitos, formatear
 * tus datos e implementar el cálculo de promedios con tipado estricto.
 * 
 * 🛠️ INSTRUCCIONES:
 * 1. Lee atentamente cada bloque marcado con `// TODO:`.
 * 2. Escribe o completa el código TypeScript según las especificaciones.
 * 3. Ejecuta en tu terminal: `pnpm run start:01` para verificar los tests.
 */

// ============================================================================
// PASO 1: Tipado de Variables Personales e Impresión de Resumen
// ============================================================================
// TODO: Asigna valores válidos a las variables con sus tipos explícitos requeridos:
// - `nombreEstudiante` (string): Debe tener al menos 1 caracter.
// - `edadEstudiante` (number): Debe ser un número mayor a 0.
// - `promedioObjetivo` (number): Debe ser un número decimal (ej. 9.85).
// - `estaMatriculado` (boolean): Debe ser true.

export const nombreEstudiante: string = "Daniel Mercha";       // 👈 TODO: Escribe tu nombre aquí
export const edadEstudiante: number = 17;          // 👈 TODO: Escribe tu edad aquí
export const promedioObjetivo: number = 9.82;        // 👈 TODO: Escribe tu promedio objetivo
export let estaMatriculado: boolean = true;    // 👈 TODO: Cambia a true



export function obtenerResumenPersonal(): string {
  const estado = estaMatriculado ? "Matriculado" : "No Matriculado"
  return `👤 Estudiante: ${nombreEstudiante} | 🎂 Edad: ${edadEstudiante} años | 🎯 Meta: ${promedioObjetivo}/10 | 📋 Estado: ${estado}`;
}


export function calcularPromedio(notas: readonly number[]): number {
 if (notas.length == 0){
  return 0;
 }
  const suma = notas.reduce((acumulado, nota) => acumulado + nota, 0); const promedio = suma / notas.length;
  return Number(promedio.toFixed(2));
}




export function formatearFichaEstudiante(
  nombre: string,
  edad: number,
  paralelo: "E1" | "E2",
  activo: boolean
): string {
  const estado = activo ? "MATRICULADO" : "RETIRADO"
  const nombreMayus= nombre.toLocaleUpperCase();

  return `[FICHA UETS] ${nombreMayus} (${edad} años) - Paralelo: ${paralelo} - Estado: ${estado}`;
}

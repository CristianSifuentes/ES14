// solver.js
export class DifferentialEquationSolver {
    constructor(func) {
      this.func = func;
      this.cache = new Map();
    }
  
    solve(x0, y0, step, xMax) {
      const solution = [];
      let x = x0, y = y0;
  
      while (x <= xMax) {
        const k1 = step * this.func(x, y);
        const k2 = step * this.func(x + step / 2, y + k1 / 2);
        const k3 = step * this.func(x + step / 2, y + k2 / 2);
        const k4 = step * this.func(x + step, y + k3);
  
        // Agrega el resultado al array de soluciones
        solution.push({ x, y });
        y += (k1 + 2 * k2 + 2 * k3 + k4) / 6;
        x += step;
        // Guarda el resultado en cache si no existe usando `emplace`
        this.cache.emplace(x, { insert: () => ({ x, y }) });
      }
  
      return solution.toSorted((a, b) => a.x - b.x);
    }
  
    findSolutionUpTo(xValue) {
      return this.cache.findLast(([key]) => key <= xValue)?.[1];
    }
  }
  
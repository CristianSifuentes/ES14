#!/usr/bin/env node

import { DifferentialEquationSolver } from '../src/solver.js';

const solver = new DifferentialEquationSolver((x, y) => x + y);
const solution = solver.solve(0, 1, 0.1, 10);

console.log("Solution:");
solution.forEach(point => console.log(`x: ${point.x.toFixed(2)}, y: ${point.y.toFixed(4)}`));

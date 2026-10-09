const fs = require('fs');

const tsContent = fs.readFileSync('./src/data/projects.ts', 'utf-8');

// Strip the interface
let jsContent = tsContent.replace(/export interface Project \{[\s\S]*?\}/, '');

// Strip the types and replace exports with simple assignments
jsContent = jsContent.replace(/export const concepts: Project\[\] = /, 'const concepts = ');
jsContent = jsContent.replace(/export const useCases: Project\[\] = /, 'const useCases = ');

// Append code to write it to JSON
jsContent += `
fs.writeFileSync('./src/data/projects.json', JSON.stringify({ concepts, useCases }, null, 2));
console.log("JSON generated successfully!");
`;

fs.writeFileSync('./temp_convert.js', jsContent);

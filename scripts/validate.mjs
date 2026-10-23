import fs from 'node:fs';
import crypto from 'node:crypto';
const catalog=JSON.parse(fs.readFileSync(new URL('../catalog.json',import.meta.url),'utf8'));
if(catalog.schema!=='agnovexa.community/1'||!Array.isArray(catalog.items)||!Number.isFinite(Date.parse(catalog.updatedAt)))throw new Error('Invalid catalog');
const keys=new Set();
for(const i of catalog.items){const key=i.kind+':'+i.identifier;if(keys.has(key))throw new Error('Duplicate '+key);keys.add(key);if(!['agent','skill','mcp','model','provider'].includes(i.kind)||!i.title||!i.description||!i.version)throw new Error('Invalid item');const u=new URL(i.sourceUrl);if(u.protocol!=='https:'||u.username||u.password)throw new Error('Unsafe source');if(i.kind==='skill'){if(crypto.createHash('sha256').update(i.skill.content).digest('hex')!==i.skill.sha256)throw new Error('Skill hash mismatch');}if(i.kind==='mcp'&&!i.mcp)throw new Error('Missing MCP config');}
console.log(JSON.stringify({schema:catalog.schema,resources:catalog.items.length,valid:true}));

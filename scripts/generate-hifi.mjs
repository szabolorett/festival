// Generator script - run with: node scripts/generate-hifi.mjs
import { writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(root, 'src')

function w(rel, content) {
  const p = join(src, rel)
  mkdirSync(dirname(p), { recursive: true })
  writeFileSync(p, content.trim() + '\n')
  console.log('wrote', rel)
}

// Assets from Figma MCP (valid ~7 days)
export const ASSETS = {
  logo: 'https://www.figma.com/api/mcp/asset/4f642822-217e-4e88-82c2-e58eae93b9b5',
  logoWelcome: 'https://www.figma.com/api/mcp/asset/f0302bdc-5223-4245-adf5-e81220f37185',
  logoSmall: 'https://www.figma.com/api/mcp/asset/01294554-fa75-4561-a070-953021982015',
  pointsRing: 'https://www.figma.com/api/mcp/asset/65a223e7-f0b9-4a18-8ce4-d5529d1e3639',
  profilePhoto: 'https://www.figma.com/api/mcp/asset/12ed3c38-4165-4c77-88ba-f3d19594470e',
  profilePhoto2: 'https://www.figma.com/api/mcp/asset/52cea08e-6a3b-4643-b8a4-f3ccb865a3a6',
  avatar1: 'https://www.figma.com/api/mcp/asset/890b3458-df6c-4adb-86ed-4ab55e4d5370',
  avatar2: 'https://www.figma.com/api/mcp/asset/fa12b62a-0ea5-4e7e-b9f0-67f971b42810',
  avatar3: 'https://www.figma.com/api/mcp/asset/fc8fc3c4-93d4-4122-9fd3-9896a2e8e7f8',
  infoIcon: 'https://www.figma.com/api/mcp/asset/bd52cf04-131d-4509-b471-534e9d220109',
  progressTrack: 'https://www.figma.com/api/mcp/asset/84dedcd4-30ef-406a-9949-160b1ff1ff01',
  arrowIcon: 'https://www.figma.com/api/mcp/asset/d025aa08-aa5a-4dea-921d-6925b599c864',
  ticketPerforation: 'https://www.figma.com/api/mcp/asset/718a98b6-fd2b-4ae6-b821-0b1929e78dd4',
  ticketLogo: 'https://www.figma.com/api/mcp/asset/7ec2ae68-5bae-4f5e-8300-5a827b92766f',
  heartIcon: 'https://www.figma.com/api/mcp/asset/598dc4fc-e8ca-4802-a838-74606ebf2832',
  cameraBtn: 'https://www.figma.com/api/mcp/asset/f3a51f3a-aa3f-4bee-98f5-3c2cf5a0cc2a',
  binPlaceholder: 'https://www.figma.com/api/mcp/asset/01cf4827-1b86-44e3-9797-96b4441db7d9',
  bin1: 'https://www.figma.com/api/mcp/asset/b56487b3-2fac-4d84-9d9b-e4fc92cfd67a',
  iconSunrise: 'https://www.figma.com/api/mcp/asset/3d5df9f6-b918-4589-9edd-667299d7146c',
  iconMap: 'https://www.figma.com/api/mcp/asset/12000aa9-ecd4-4745-a84f-50337a6d13ec',
  iconDice: 'https://www.figma.com/api/mcp/asset/44ac417f-0b38-482f-b560-64b0d3e5fed7',
  iconSettings: 'https://www.figma.com/api/mcp/asset/571f2294-eba6-49d1-be0f-8a27f5963bf2',
  signUpLogo: 'https://www.figma.com/api/mcp/asset/bf6bea58-6b92-4d19-ab3d-d3aa8cca78f8',
}

w('assets/figmaAssets.js', `export const ASSETS = ${JSON.stringify({
  logo: 'https://www.figma.com/api/mcp/asset/4f642822-217e-4e88-82c2-e58eae93b9b5',
  logoWelcome: 'https://www.figma.com/api/mcp/asset/f0302bdc-5223-4245-adf5-e81220f37185',
  logoSmall: 'https://www.figma.com/api/mcp/asset/01294554-fa75-4561-a070-953021982015',
  pointsRing: 'https://www.figma.com/api/mcp/asset/65a223e7-f0b9-4a18-8ce4-d5529d1e3639',
  profilePhoto: 'https://www.figma.com/api/mcp/asset/12ed3c38-4165-4c77-88ba-f3d19594470e',
  profilePhoto2: 'https://www.figma.com/api/mcp/asset/52cea08e-6a3b-4643-b8a4-f3ccb865a3a6',
  avatar1: 'https://www.figma.com/api/mcp/asset/890b3458-df6c-4adb-86ed-4ab55e4d5370',
  avatar2: 'https://www.figma.com/api/mcp/asset/fa12b62a-0ea5-4e7e-b9f0-67f971b42810',
  avatar3: 'https://www.figma.com/api/mcp/asset/fc8fc3c4-93d4-4122-9fd3-9896a2e8e7f8',
  infoIcon: 'https://www.figma.com/api/mcp/asset/bd52cf04-131d-4509-b471-534e9d220109',
  progressTrack: 'https://www.figma.com/api/mcp/asset/84dedcd4-30ef-406a-9949-160b1ff1ff01',
  arrowIcon: 'https://www.figma.com/api/mcp/asset/d025aa08-aa5a-4dea-921d-6925b599c864',
  ticketPerforation: 'https://www.figma.com/api/mcp/asset/718a98b6-fd2b-4ae6-b821-0b1929e78dd4',
  ticketLogo: 'https://www.figma.com/api/mcp/asset/7ec2ae68-5bae-4f5e-8300-5a827b92766f',
  heartIcon: 'https://www.figma.com/api/mcp/asset/598dc4fc-e8ca-4802-a838-74606ebf2832',
  cameraBtn: 'https://www.figma.com/api/mcp/asset/f3a51f3a-aa3f-4bee-98f5-3c2cf5a0cc2a',
  binPlaceholder: 'https://www.figma.com/api/mcp/asset/01cf4827-1b86-44e3-9797-96b4441db7d9',
  bin1: 'https://www.figma.com/api/mcp/asset/b56487b3-2fac-4d84-9d9b-e4fc92cfd67a',
  iconSunrise: 'https://www.figma.com/api/mcp/asset/3d5df9f6-b918-4589-9edd-667299d7146c',
  iconMap: 'https://www.figma.com/api/mcp/asset/12000aa9-ecd4-4745-a84f-50337a6d13ec',
  iconDice: 'https://www.figma.com/api/mcp/asset/44ac417f-0b38-482f-b560-64b0d3e5fed7',
  iconSettings: 'https://www.figma.com/api/mcp/asset/571f2294-eba6-49d1-be0f-8a27f5963bf2',
  signUpLogo: 'https://www.figma.com/api/mcp/asset/bf6bea58-6b92-4d19-ab3d-d3aa8cca78f8',
}, null, 2)}
`)

console.log('done')

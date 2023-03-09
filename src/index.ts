import inquirer from 'inquirer';
import { characters } from './characters';
import { getUserInput } from './user_input';
import * as fs from 'fs';
const exec = require('await-exec')

export async function generateFiles() {
  const {
    SmashCharacterName,
    desired,
    ModName,
    ModNameUppercase,
    BoxingRingTitle,
  } = await getUserInput();
  // let SmashCharacterName = 'demon'
  // let desired = 3
  // let ModName = 'Ban'
  // let ModNameUppercase = 'BAN'
  // let BoxingRingTitle = 'Foxs'
  let charIndex = characters.indexOf(SmashCharacterName)

  for (let i = 0; i < 8; i++) {
    const xml0 = `<?xml version=\"1.0\" encoding=\"utf-16\"?>
<xmsbt>
        <entry label=\"nam_chr0_0${i}_${SmashCharacterName}\">
                <text>${ModName}</text>
        </entry>
        <entry label=\"nam_chr1_0${i}_${SmashCharacterName}\">
                <text>${ModName}</text>
        </entry>
        <entry label=\"nam_chr2_0${i}_${SmashCharacterName}\">
                <text>${ModNameUppercase}</text>
        </entry>
        <entry label=\"nam_stage_name_0${i}_${SmashCharacterName}\">
                <text>${BoxingRingTitle}</text>
        </entry>
        <entry label=\"nam_chr3_0${i}_${SmashCharacterName}\">
                <text>${ModNameUppercase}</text>
        </entry>
</xmsbt>
    `
    const xml1 = `<?xml version=\"1.0\" encoding=\"utf-16\"?>
<xmsbt>
        <entry label=\"nam_chr1_0${i}_${SmashCharacterName}\">
                <text>${ModName}</text>
        </entry>
        <entry label=\"nam_chr2_0${i}_${SmashCharacterName}\">
                <text>${ModNameUppercase}</text>
        </entry>
        <entry label=\"nam_stage_name_0${i}_${SmashCharacterName}\">
                <text>${BoxingRingTitle}</text>
        </entry>
</xmsbt>
    `

    let filename = `msg_name-ReplaceForc0${i}.xmsbt`
    let xml = xml1;
    // if its the one they want to slot (c03)
    if (i == desired) {
      filename = 'msg_name.xmsbt';
    }
    // if its the c00
    if (i == 0) {
      xml = xml0;
    }
    const dir = './ui/message/'
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    const dir2 = './ui/param/database/'
    if (!fs.existsSync(dir2)) {
      fs.mkdirSync(dir2, { recursive: true })
    }
    // console.log(xml)
    // fs.writeFileSync(`ui/message/${filename}`, xml, { encoding: 'utf16le' });
    const utf16buffer = Buffer.from(`\ufeff${xml}`, 'utf16le');
    fs.writeFileSync(`ui/message/${filename}`, utf16buffer);

  }
  await exec('pip install pyprc')
  await exec(`python ./.prc/go.py ${charIndex}`)
  for (let i = 0; i < 8; i++) {
    let path = 'ui/param/database/'
    let input = `${path}ui_chara_db-Replace-for-c0${i}.prc`
    // let osfile = process.platform === "win32" ? 'parcel-win' 
    if (i == desired) {
      await exec(`./.prc/parcel-mac diff ./.prc/ui_chara_db.prc ${input} ${path}ui_chara_db.prcx`)
    }
    await exec(`./.prc/parcel-mac diff ./.prc/ui_chara_db.prc ${input} ${path}ui_chara_db-Replace-for-c0${i}.prcx`)
    await exec(`rm ${input}`)
  }
};
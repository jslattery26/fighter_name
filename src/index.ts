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
                BoxingRingTitle,
        } = await getUserInput();
        let charIndex = SmashCharacterName.index;
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
                <text>${ModName.toUpperCase()}</text>
        </entry>
        <entry label=\"nam_stage_name_0${i}_${SmashCharacterName}\">
                <text>${BoxingRingTitle}</text>
        </entry>
        <entry label=\"nam_chr3_0${i}_${SmashCharacterName}\">
                <text>${ModName.toUpperCase()}</text>
        </entry>
</xmsbt>
    `
                const xml1 = `<?xml version=\"1.0\" encoding=\"utf-16\"?>
<xmsbt>
        <entry label=\"nam_chr1_0${i}_${SmashCharacterName}\">
                <text>${ModName}</text>
        </entry>
        <entry label=\"nam_chr2_0${i}_${SmashCharacterName}\">
                <text>${ModName.toUpperCase()}</text>
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
                const utf16buffer = Buffer.from(`\ufeff${xml}`, 'utf16le');
                fs.writeFileSync(`ui/message/${filename}`, utf16buffer);

        }
        await exec('pip install pyprc')
        await exec(`python ./.prc/go.py ${charIndex}`)
        for (let i = 0; i < 8; i++) {
                let path = 'ui/param/database/'
                let input = `${path}ui_chara_db-Replace-for-c0${i}.prc`
                let baseFile = 'ui_chara_db.prcx'
                let replaceFile = `ui_chara_db-Replace-for-c0${i}.prcx`
                let osfile = process.platform === "win32" ? '' : process.platform === "darwin" ? './.prc/parcel-mac' : './.prc/parcel-linux'

                if (process.platform == "win32") {
                        await exec(`".prc/parcel.exe" diff ./.prc/ui_chara_db.prc ${input} ${path}${i == desired ? baseFile : replaceFile}`)
                        await exec(`DEL "ui\\param\\database\\ui_chara_db-Replace-for-c0${i}.prc"`)
                }
                if (process.platform == "darwin") {
                        await exec(`chmod +x ./.prc/parcel-mac`)
                        await exec(`./.prc/parcel-mac diff ./.prc/ui_chara_db.prc ${input} ${path}${i == desired ? baseFile : replaceFile}`)
                        await exec(`rm ${input}`)
                }
                if (process.platform == "linux") {
                        await exec(`chmod +x ./.prc/parcel-linux`)
                        await exec(`./.prc/parcel-linux diff ./.prc/ui_chara_db.prc ${input} ${path}${i == desired ? baseFile : replaceFile}`)
                        await exec(`rm ${input}`)
                }
        }
};
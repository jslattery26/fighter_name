## fighter_name
### single slot file generator for changing character name with mods

### Cross-platform! Oh my god a smash tool that doesn't require .NET??????????? How is this possible??????
### this will easily generate all the files you need (with best practices), like so: 

(Let's say you chose to replace slot 3)
```
.
├── ui
│   ├── param
│       └── database
│           └── param
│               └── ui_chara_db.prcx
│               └── ui_chara_db-Replace-for-c01.prcx
│               └── ui_chara_db-Replace-for-c02.prcx
│               └── ui_chara_db-Replace-for-c04.prcx
│               └── ui_chara_db-Replace-for-c05.prcx
│               └── ui_chara_db-Replace-for-c06.prcx
│               └── ui_chara_db-Replace-for-c07.prcx
│   ├── message
│       └── msg_name.xmsbt
│       └── msg_name-ReplaceForc00.xmsbt
│       └── msg_name-ReplaceForc01.xmsbt
│       └── msg_name-ReplaceForc02.xmsbt
│       └── msg_name-ReplaceForc04.xmsbt
│       └── msg_name-ReplaceForc05.xmsbt
│       └── msg_name-ReplaceForc06.xmsbt
│       └── msg_name-ReplaceForc07.xmsbt
```

## Requirements
### *The only requirement is that you have python3.9 installed. If you don't -- i highly recommend [pyenv](https://github.com/pyenv/pyenv) to set it up. Make sure 3.9 is the version that you get when you type `python` into your default shell.

## Usage

### Windows
- Extract the folder to any directory.

- Click the executable file `fighter_name-win.exe`, 

- Fill out the info - you're done.

### Mac/Linux
- Extract the folder to any directory.

- cd into the fighter_name folder that you extracted (important)

- run `./fighter_name-macos` or `./fighter_name-linux`

## Credits
- [@benhall-7](https://github.com/benhall-7) & [@blu-dev](https://github.com/blu-dev) for parcel, pyprc, and all of the other prc research
- [Watapascul](https://gamebanana.com/members/1780117) on gamebanana for the msg_name template and tutorial

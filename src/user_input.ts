import inquirer from 'inquirer';
import { characters } from './characters';

export async function getUserInput() {
    const prompt = inquirer.createPromptModule();

    return prompt(
        [
            {
                type: 'list',
                name: 'SmashCharacterName',
                message: 'Select your fighter',
                choices: characters.map((e) => {
                    return { name: `${e.key} (${e.name})`, value: e }
                }),
                pageSize: '20'
            },
            {
                type: 'number',
                name: 'desired',
                message: "Enter the desired slot for your character (ex: 3): ",
            },
            {
                type: 'input',
                name: 'ModName',
                message: "Enter the value for ModName (ex: Blario): ",
            },
            {
                type: 'input',
                name: 'BoxingRingTitle',
                message: "Enter the BoxingRingTitle (ex: Mafia Man): ",
            },
        ],
    );
}
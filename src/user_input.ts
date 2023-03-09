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
                choices: characters,
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
                message: "Enter the value for ModName (ex: Flavio): ",
            },
            {
                type: 'input',
                name: 'ModNameUppercase',
                message: "Enter the ModNameUppercase (ex: FLAVIO): ",
            },
            {
                type: 'input',
                name: 'BoxingRingTitle',
                message: "Enter the BoxingRingTitle (ex: Mafia Man): ",
            },
        ],
    );
}
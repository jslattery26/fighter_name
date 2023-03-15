from pyprc import *
import sys
import os

fighter_index = sys.argv[1]

outDir = r'./ui/param/database/' 
if not os.path.exists(outDir):
    os.makedirs(outDir)

fighter_index = int(fighter_index)

for x in range(8):
    fighter_param = param('./.prc/ui_chara_db.prc')
    table = fighter_param[hash("db_root")]
    hash.load_labels("./.prc/ParamLabels.csv")
    table[fighter_index][hash(f'n0{str(x)}_index')].value = x
    replacer = table[fighter_index][hash(f'characall_label_c00')].value
    table[fighter_index][hash(f'characall_label_c0{x}')].value = replacer
    fighter_param.save(f'{outDir}ui_chara_db-Replace-for-c0{x}.prc')
    
# Double check to make sure they're actually changing
# for x in range(int(num_of_costumes)):
#     fighter_param = param(f'ui_chara_db.prc')
#     table = fighter_param[hash("db_root")]
#     print(f'n0{x} is now: {table[fighter_index][hash(f"n0{str(x)}_index")].value}')
#     print(f'characall_label_c0{x} is now: {table[fighter_index][hash(f"characall_label_c0{x}")].value}')

# for x in range(int(num_of_costumes)):
#     fighter_param = param(f'ui/param/database/ui_chara_db-Replace-for-c0{x}.prc')
#     table = fighter_param[hash("db_root")]
#     print(f'n0{x} is now: {table[fighter_index][hash(f"n0{str(x)}_index")].value}')
#     print(f'characall_label_c0{x} is now: {table[fighter_index][hash(f"characall_label_c0{x}")].value}')
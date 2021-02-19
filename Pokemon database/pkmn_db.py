import requests
import pandas as pd 
import csv
from bs4 import BeautifulSoup

page = requests.get('https://pokemondb.net/pokedex/all')
outfile = open('pokemondatabase.csv', 'w')
writer = csv.writer(outfile)


soup = BeautifulSoup(page.content, 'html.parser')


table = soup.findAll('tr')
pkmn_name = []
for i in table[1:]:
    pkmn_name.append(i.a.text.strip())

all_types = []
for i in table[1:]:
    types = i.findAll('a', class_='type-icon')
    pkmn_type1 = []
    for i in types:
        pkmn_type1.append(i.text.strip())
    all_types.append(pkmn_type1)

pokeID = []
for i in table[1:]:
    id = i.findAll('span', class_='infocard-cell-data')
    pkmnID = []
    for i in id:
        pkmnID.append(i.text.strip())
    pokeID.append(pkmnID)
    

pkmn_df = pd.DataFrame([pokeID, pkmn_name, all_types]).transpose()

pkmn_df.columns =['ID', 'Name', 'Type']
pkmn_df.to_csv('pokemondatabase.csv')
pkmn_df = [('ID', 'Name', 'Types')]
outfile.close()
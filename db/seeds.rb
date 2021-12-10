puts 'Deleting old data...'
# Type.destroy_all

puts '🌱 Seeding data...'

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

puts 'Loading Types...'
grass = Type.create(name: 'Grass')
grasspoison = Type.create(name: 'Grass, Poison')
fire = Type.create(name: 'Fire')
fireflying = Type.create(name: 'Fire, Flying')
water = Type.create(name: 'Water')
bug = Type.create(name: 'Bug')
bugflying = Type.create(name: 'Bug, Flying')
electric = Type.create(name: 'Electric')
normal = Type.create(name: 'Normal')
normalflying = Type.create(name: 'Normal, Flying')
unknown = Type.create(name: '???')

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

puts 'Loading Abilities...'

overgrow =
  Ability.create(
    name: 'Overgrow',
    effect:
      "increases the power of Grass-type moves by 50% (1.5×) when the ability-bearer's HP falls below a third of its maximum (known in-game as in a pinch).",
  )
blaze =
  Ability.create(
    name: 'Blaze',
    effect:
      "increases the power of Fire-type moves by 50% (1.5×) when the ability-bearer's HP falls below a third of its maximum (known in-game as in a pinch).",
  )
torrent =
  Ability.create(
    name: 'Torrent',
    effect:
      "increases the power of Water-type moves by 50% (1.5×) when the ability-bearer's HP falls below a third of its maximum (known in-game as in a pinch).",
  )
shielddust =
  Ability.create(
    name: 'Shield Dust',
    effect: 'Blocks the added effects of attacks taken.',
  )
shedskin =
  Ability.create(
    name: 'Shed Skin',
    effect: 'The Pokémon may heal its own status problems.',
  )
compoundeyes =
  Ability.create(
    name: 'Compound Eyes',
    effect:
      "Compound Eyes raises the ability-bearer's accuracy by 30%. If a Pokémon with Compound Eyes is first in the party, Pokémon that can be holding items have that chance increase from 50% to 60% (for common items), 5% to 20% (for uncommon items) or 1% to 5% (for rare items).",
  )
static =
  Ability.create(
    name: 'Static',
    effect:
      'If a Pokémon with Static is hit by a move making contact, there is a 30% chance the foe will become paralyzed.

      Outside of battle
      If a Pokémon with Static is the leading party Pokémon, it is 50% more likely that a wild Pokémon encountered will be Electric type.',
  )
smashing = Ability.create(name: 'Smashing', effect: '???')

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

puts 'Loading Pokemon...'

Pokemon.create(
  name: 'Bulbasaur',
  height: 0.7,
  weight: 6.9,
  type_id: grasspoison.id,
  ability_id: overgrow.id,
  image: 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg',
)
Pokemon.create(
  name: 'Ivyasaur',
  height: 1,
  weight: 13,
  type_id: grasspoison.id,
  ability_id: overgrow.id,
  image: 'https://img.pokemondb.net/artwork/large/ivysaur.jpg',
)
Pokemon.create(
  name: 'Venasaur',
  height: 2,
  weight: 100,
  type_id: grasspoison.id,
  ability_id: overgrow.id,
  image: 'https://img.pokemondb.net/artwork/large/venusaur.jpg',
)
Pokemon.create(
  name: 'Charmander',
  height: 0.6,
  weight: 8.5,
  type_id: fire.id,
  ability_id: blaze.id,
  image: 'https://img.pokemondb.net/artwork/large/charmander.jpg',
)
Pokemon.create(
  name: 'Charmeleon',
  height: 1.1,
  weight: 19,
  type_id: fire.id,
  ability_id: blaze.id,
  image: 'https://img.pokemondb.net/artwork/large/charmeleon.jpg',
)
Pokemon.create(
  name: 'Charizard',
  height: 1.7,
  weight: 90.5,
  type_id: fireflying.id,
  ability_id: blaze.id,
  image: 'https://img.pokemondb.net/artwork/large/charizard.jpg',
)
Pokemon.create(
  name: 'Squirtle',
  height: 0.5,
  weight: 9,
  type_id: water.id,
  ability_id: torrent.id,
  image: 'https://img.pokemondb.net/artwork/large/squirtle.jpg',
)
Pokemon.create(
  name: 'Wartortle',
  height: 1,
  weight: 22.5,
  type_id: water.id,
  ability_id: torrent.id,
  image: 'https://img.pokemondb.net/artwork/large/wartortle.jpg',
)
Pokemon.create(
  name: 'Blastoise',
  height: 1.6,
  weight: 85.5,
  type_id: water.id,
  ability_id: torrent.id,
  image: 'https://img.pokemondb.net/artwork/large/blastoise.jpg',
)
Pokemon.create(
  name: 'Caterpie',
  height: 0.3,
  weight: 2.9,
  type_id: bug.id,
  ability_id: shielddust.id,
  image: 'https://img.pokemondb.net/artwork/large/caterpie.jpg',
)
Pokemon.create(
  name: 'Metapod',
  height: 0.7,
  weight: 9.9,
  type_id: bug.id,
  ability_id: shedskin.id,
  image: 'https://img.pokemondb.net/artwork/large/metapod.jpg',
)
Pokemon.create(
  name: 'Pikachu',
  height: 0.3,
  weight: 2.9,
  type_id: electric.id,
  ability_id: static.id,
  image: 'https://img.pokemondb.net/artwork/large/pikachu.jpg',
)
Pokemon.create(
  name: 'Nigel Thornberry',
  height: 177.8,
  weight: 70,
  type_id: unknown.id,
  ability_id: smashing.id,
  image:
    'https://cdn.costumewall.com/wp-content/uploads/2017/08/nigel-thornberry.webp',
)

puts '🌱 Done Seeding!'

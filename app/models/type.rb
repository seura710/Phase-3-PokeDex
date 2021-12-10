class Type < ActiveRecord::Base
  has_many :pokemons
  # has_many :pokemon, through: :pokemon_types
end

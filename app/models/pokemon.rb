class Pokemon < ActiveRecord::Base
  belongs_to :type
  belongs_to :ability
  # has_many :types, through: :pokemon_types
end

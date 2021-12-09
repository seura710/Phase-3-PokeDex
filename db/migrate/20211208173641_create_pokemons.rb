class CreatePokemons < ActiveRecord::Migration[6.1]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.float :height
      t.float :weight
      t.integer :type_id
      t.integer :ability_id
    end
  end
end

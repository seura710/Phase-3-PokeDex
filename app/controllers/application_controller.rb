class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/pokemon' do
    pokemon = Pokemon.all.limit(8)
    pokemon.to_json
  end

  get '/pokemon/all' do
    pokemon = Pokemon.all
    pokemon.to_json
  end

  get '/pokemon/:id' do
    pokemon = Pokemon.find(params[:id])
    pokemon.to_json
  end

  post '/pokemon' do
    pokemon =
      Pokemon.create(
        name: params[:name],
        height: params[:height],
        weight: params[:weight],
        type_id: params[:type_id],
        ability_id: params[:ability_id],
        image: params[:image]
      )

    #creates a new pokemon in our database
    #params is a key value pair that comes from the body of our request

    pokemon.to_json
    #return a response with the new pokemon as JSON
  end

  delete '/pokemon/:id' do
    pokemon = Pokemon.find(params[:id])
    pokemon.destroy
    pokemon.to_json
  end
end

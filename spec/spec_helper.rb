ENV['RACK_ENV'] ||= 'test'
require_relative '../config/environment'
require 'sinatra/activerecord/rake'

RSpec.configure do |config|
  config.include Rack::Test::Methods

  # Database setup
  if ActiveRecord::Base.connection.migration_context.needs_migration?
    # Run migrations for test environment
    Rake::Task['db:migrate'].execute
  end

  config.before(:suite) { DatabaseCleaner.clean_with(:truncation) }

  config.before { DatabaseCleaner.strategy = :transaction }

  config.before(:each, js: true) { DatabaseCleaner.strategy = :truncation }

  config.before { DatabaseCleaner.start }

  config.after { DatabaseCleaner.clean }

  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups
end

# Rack::Test::Methods needs this to run our controller
def app
  Rack::Builder.parse_file('config.ru').first
end

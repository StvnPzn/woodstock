class AddColumnToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :role, :integer, default: 1
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :address, :string
  end
end

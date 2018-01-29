class CreateFavoriteStocks < ActiveRecord::Migration[5.1]
  def change
    create_table :favorite_stocks do |t|
      t.integer :user_id
      t.string :symbol

      t.timestamps
    end
  end
end

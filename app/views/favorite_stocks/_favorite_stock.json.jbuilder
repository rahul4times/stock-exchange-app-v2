json.extract! favorite_stock, :id, :user_id, :symbol, :created_at, :updated_at
json.url favorite_stock_url(favorite_stock, format: :json)

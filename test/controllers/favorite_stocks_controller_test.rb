require 'test_helper'

class FavoriteStocksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @favorite_stock = favorite_stocks(:one)
  end

  test "should get index" do
    get favorite_stocks_url
    assert_response :success
  end

  test "should get new" do
    get new_favorite_stock_url
    assert_response :success
  end

  test "should create favorite_stock" do
    assert_difference('FavoriteStock.count') do
      post favorite_stocks_url, params: { favorite_stock: { symbol: @favorite_stock.symbol, user_id: @favorite_stock.user_id } }
    end

    assert_redirected_to favorite_stock_url(FavoriteStock.last)
  end

  test "should show favorite_stock" do
    get favorite_stock_url(@favorite_stock)
    assert_response :success
  end

  test "should get edit" do
    get edit_favorite_stock_url(@favorite_stock)
    assert_response :success
  end

  test "should update favorite_stock" do
    patch favorite_stock_url(@favorite_stock), params: { favorite_stock: { symbol: @favorite_stock.symbol, user_id: @favorite_stock.user_id } }
    assert_redirected_to favorite_stock_url(@favorite_stock)
  end

  test "should destroy favorite_stock" do
    assert_difference('FavoriteStock.count', -1) do
      delete favorite_stock_url(@favorite_stock)
    end

    assert_redirected_to favorite_stocks_url
  end
end

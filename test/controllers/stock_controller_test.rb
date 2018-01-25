require 'test_helper'

class StockControllerTest < ActionDispatch::IntegrationTest
  test "should get view" do
    get stock_view_url
    assert_response :success
  end

end

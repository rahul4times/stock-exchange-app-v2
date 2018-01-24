require 'test_helper'

class MarketControllerTest < ActionDispatch::IntegrationTest
  test "should get gainers" do
    get market_gainers_url
    assert_response :success
  end

end

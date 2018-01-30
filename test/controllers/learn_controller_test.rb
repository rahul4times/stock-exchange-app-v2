require 'test_helper'

class LearnControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get learn_show_url
    assert_response :success
  end

end

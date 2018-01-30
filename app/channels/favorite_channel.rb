class FavoriteChannel < ApplicationCable::Channel


  def subscribed
    user = 0
    # current_user,
    puts('+'*90)
    puts 'User joined!'
    puts('+'*90)

    stream_from 'favorite_channel'

  end

  def unsubscribed
    puts('x'*90)
    puts 'User left!'
    puts('x'*90)
  end


end

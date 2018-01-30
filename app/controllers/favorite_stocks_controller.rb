class FavoriteStocksController < ApplicationController
  before_action :set_favorite_stock, only: [:show, :edit, :update, :destroy]

  # GET /favorite_stocks
  # GET /favorite_stocks.json
  def index
    @favorite_stocks = FavoriteStock.all
  end

  # GET /favorite_stocks/1
  # GET /favorite_stocks/1.json
  def show
  end

  # GET /favorite_stocks/new
  def new
    @favorite_stock = FavoriteStock.new
  end

  # GET /favorite_stocks/1/edit
  def edit
  end

  # POST /favorite_stocks
  # POST /favorite_stocks.json
  def create
    @favorite_stock = FavoriteStock.new({symbol: favorite_stock_params[:symbol], user_id: current_user[:id]})

    respond_to do |format|
      if @favorite_stock.save
        format.html { redirect_to @favorite_stock, notice: 'Favorite stock was successfully created.' }
        format.json { render :show, status: :created, location: @favorite_stock }
      else
        format.html { render :new }
        format.json { render json: @favorite_stock.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /favorite_stocks/1
  # PATCH/PUT /favorite_stocks/1.json
  def update
    respond_to do |format|
      if @favorite_stock.update(favorite_stock_params)
        format.html { redirect_to @favorite_stock, notice: 'Favorite stock was successfully updated.' }
        format.json { render :show, status: :ok, location: @favorite_stock }
      else
        format.html { render :edit }
        format.json { render json: @favorite_stock.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /favorite_stocks/1
  # DELETE /favorite_stocks/1.json
  def destroy
    @favorite_stock.destroy
    respond_to do |format|
      format.html { redirect_to favorite_stocks_url, notice: 'Favorite stock was successfully deleted.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite_stock
      @favorite_stock = FavoriteStock.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def favorite_stock_params
      # params.require(:favorite_stock).permit(:user_id, :symbol)
      params.require(:favorite_stock).permit(:symbol)
    end
end

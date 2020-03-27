class Api::CardsController < ApplicationController
  before_action :set_category
  before_action :set_card, only: [:update,:show,:destroy]

  def index
    render json: @category.cards
  end

  def create
    card = @category.cards.new(card_params)
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def set_category
    @category = Category.find(params[:category_id])
  end

  def set_card
    @card = Card.find(params[:id])
  end

  def card_params
    params.require(:card).permit(:question, :answer, :points,:category_id)
    
  end
 
end

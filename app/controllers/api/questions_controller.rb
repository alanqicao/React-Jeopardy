class Api::QuestionsController < ApplicationController
  before_action :set_card
  def index
    render json: @card.questions
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
  def set_card
    @card = Card.find(params[:card_id])
  end
end

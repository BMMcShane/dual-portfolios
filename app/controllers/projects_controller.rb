class ProjectsController < ApplicationController

    def create
        project = Project.create!(user_id: params[:user_id], title: params[:title], description: params[:description], timeframe: params[:timeframe], route: params[:route])
        Award.create(name: params[:awards], project_id: project.id)
        ProjectLanguage.create(project_id: project.id, language_id: Language.find_by(name: params[:languages]).id)
        render json: project, status: :created
    end

    private

    def project_params
        params.permit(:title, :description, :timeframe, :route, :awards, :languages, :user_id)
    end
    
end

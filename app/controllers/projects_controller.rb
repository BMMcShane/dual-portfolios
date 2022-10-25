class ProjectsController < ApplicationController

    def create
        project = Project.create!(user_id: params[:user_id], title: params[:title], description: params[:description], timeframe: params[:timeframe], route: params[:route])
        Award.create(name: params[:awards], project_id: project.id)
        lang = nil
        if Language.find_by(name: params[:languages])
            lang = Language.find_by(name: params[:languages])
        else
            lang = Language.create(name: params[:languages])
        end
        ProjectLanguage.create(project_id: project.id, language_id: lang.id)
        render json: User.find(params[:user_id]), status: :created
    end

    private

    def project_params
        params.permit(:title, :description, :timeframe, :route, :awards, :languages, :user_id)
    end
    
end

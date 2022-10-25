class ProjectsController < ApplicationController

    def create
        project = Project.create!(user_id: params[:user_id], title: params[:title], description: params[:description], timeframe: params[:timeframe], route: params[:route])
        awardArray = params[:awards].split(", ")
        puts awardArray
        awardArray.each do |s|
            Award.create(name: s, project_id: project.id)
        end
        lang = nil
        if Language.find_by(name: params[:languages])
            lang = Language.find_by(name: params[:languages])
        else
            lang = Language.create(name: params[:languages])
        end
        ProjectLanguage.create(project_id: project.id, language_id: lang.id)
        render json: User.find(params[:user_id]), include: ['projects', 'projects.awards', 'projects.languages'], status: :created
    end

    def update
        project = Project.find(params[:id])
        project.update!(project_params)
        render json: User.find(params[:user_id]), include: ['projects', 'projects.awards', 'projects.languages'], status: :accepted
    end

    def destroy
        project = Project.find(params[:id])
        user = User.find(project.user_id)
        project.destroy
        render json: user, include: ['projects', 'projects.awards', 'projects.languages']
    end

    private

    def project_params
        params.permit(:title, :description, :timeframe, :route, :awards, :languages, :user_id)
    end
    
end

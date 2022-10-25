class ProjectsController < ApplicationController

    def create
        project = Project.create!(user_id: params[:user_id], title: params[:title], description: params[:description], timeframe: params[:timeframe], route: params[:route])
        awardArray = params[:awards].split(", ")
        awardArray.each do |s|
            Award.create(name: s, project_id: project.id)
        end

        languageArray = params[:languages].split(", ")
        languageArray.each do |l|
            lang = nil
            if Language.find_by(name: l)
                lang = Language.find_by(name: l)
            else
                lang = Language.create(name: l)
            end
            ProjectLanguage.create(project_id: project.id, language_id: lang.id)
        end
        render json: User.find(params[:user_id]), include: ['projects', 'projects.awards', 'projects.languages'], status: :created
    end

    def update
        project = Project.find(params[:id])
        project.awards.destroy_all
        project.project_languages.destroy_all
        awardArray = params[:awards].split(", ")
        awardArray.each do |s|
            Award.create(name: s, project_id: project.id)
        end
        languageArray = params[:languages].split(", ")
        languageArray.each do |l|
            lang = nil
            if Language.find_by(name: l)
                lang = Language.find_by(name: l)
            else
                lang = Language.create(name: l)
            end
            ProjectLanguage.create(project_id: project.id, language_id: lang.id)
        end
        project.update!(user_id: params[:user_id], title: params[:title], description: params[:description], timeframe: params[:timeframe], route: params[:route])
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

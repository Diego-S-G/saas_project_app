class TenantsController < ApplicationController
  before_action :set_tenant

  def edit
  end

  def update
    respond_to do |format|
      if @tenant.update(tenant_params)
        format.html { redirect_to root_path, notice: "Tenant was successfully updated." }
      else
        format.html { render :edit }
      end
    end
  end
  
  def change
    @tenant = Tenant.find(params[:id])
    Tenant.set_current_tenant @tenant.id
    session[:tenant_id] = Tenant.current_tenant.id
    redirect_to home_index_path, notice: "Switched to organization #{@tenant.name}"
  end

  private

  def set_tenant
    @tenant = Tenant.find(Tenant.current_tenant_id)
  end
  
  def tenant_params
    params.require(:tenant).permit(:name, :plan)
  end
end

using System;
using System.ComponentModel;

namespace Erlopic_Welear_Sponlem
{
    partial class Form1
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要修改
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.viewPortHost = new System.Windows.Forms.WebBrowser();
            this.SuspendLayout();
            // 
            // viewPortHost
            // 
            this.viewPortHost.Dock = System.Windows.Forms.DockStyle.Fill;
            this.viewPortHost.Location = new System.Drawing.Point(0, 0);
            this.viewPortHost.MinimumSize = new System.Drawing.Size(20, 20);
            this.viewPortHost.Name = "viewPortHost";
            this.viewPortHost.ScrollBarsEnabled = false;
            this.viewPortHost.Size = new System.Drawing.Size(800, 450);
            this.viewPortHost.TabIndex = 0;
            this.viewPortHost.Url = new System.Uri("C:\\Users\\TOP-D330\\source\\repos\\Erlopic Welear Sponlem\\Resources\\index.html", System.UriKind.Absolute);
            this.viewPortHost.NewWindow += new System.ComponentModel.CancelEventHandler(this.viewPortHost_NewWindow);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.viewPortHost);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.MouseMove += new System.Windows.Forms.MouseEventHandler(this.FrmLogin_MouseMove);
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.WebBrowser viewPortHost;
    }
}


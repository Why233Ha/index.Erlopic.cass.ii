using System;
using Microsoft.Win32;
using System.ComponentModel;
using System.Windows.Forms;

namespace Erlopic_Welear_Sponlem
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            viewPortHost.ScriptErrorsSuppressed = true;

        }


        private void viewPortHost_NewWindow(object sender, CancelEventArgs e)
        {
            e.Cancel = true;
            viewPortHost.Navigate(viewPortHost.StatusText);
        }


        // 鼠标移动事件内，调用WinAPI实现拖拽功能
        private void FrmLogin_MouseMove(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                WinAPI.ReleaseCapture();
                WinAPI.SendMessage(Handle, WinAPI.WM_NCLBUTTONDOWN, WinAPI.HT_CAPTION, 0);
            }
        }
    }
}
